FROM python:3.8-alpine

ENV PATH="/scripts:${PATH}"

COPY ./requirements.txt /requirements.txt
RUN apk add --update --no-cache --virtual .tmp gcc libc-dev linux-headers

RUN \
 apk add --no-cache postgresql-libs && \
 apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev

RUN python3 -m pip install -r /requirements.txt
RUN apk del .tmp
RUN apk --purge del .build-deps

RUN mkdir /vector_backend
COPY ./vector_backend/vector_backend /vector_backend/vector_backend
WORKDIR /vector_backend/vector_backend
COPY ./scripts /scripts

RUN chmod +x /scripts/*

CMD ["entrypoint.sh"]
