# 1. Node 이미지를 이용하여 빌드
FROM node:16 AS build

# 2. 프로젝트 파일을 컨테이너의 /app 디렉토리에 복사
WORKDIR /app
COPY . .

# 3. 의존성 설치 및 애플리케이션 빌드
RUN npm install
RUN npm run build

# 4. Nginx로 제공하기 위한 단계
FROM nginx:alpine

# 5. Nginx 설정 파일 덮어쓰기 (필요한 경우에만 사용)
# COPY nginx.conf /etc/nginx/nginx.conf

# 6. 빌드된 파일을 Nginx 기본 제공 폴더로 복사
COPY --from=build /app/build /usr/share/nginx/html

# 7. 컨테이너 시작 시 Nginx 실행
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
