FROM coturn/coturn

COPY turnserver.conf /etc/coturn/turnserver.conf

EXPOSE 3478/udp

CMD ["turnserver", "-c", "/etc/coturn/turnserver.conf", "-v"]
