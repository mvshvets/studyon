FROM python:3.8.2-alpine3.11

RUN mkdir -p /app
WORKDIR /app

COPY requirements.txt .
RUN pip --no-cache-dir install -r requirements.txt

COPY src src

WORKDIR /app/src
ENTRYPOINT ["python", "./application.py"]
