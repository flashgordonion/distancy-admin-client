
# Dockerfile based off https://medium.com/greedygame-engineering/so-you-want-to-dockerize-your-react-app-64fbbb74c217
# Stage 1
FROM node:13 as react-build
WORKDIR /app
COPY . ./
RUN npm install package.json
RUN npm run-script build

# Stage 2 - the production environment
FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
