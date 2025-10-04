FROM coturn/coturn:latest

COPY turnserver.conf /etc/coturn/turnserver.conf

EXPOSE 3000/udp
EXPOSE 3000/tcp

CMD ["/usr/bin/turnserver", "-c", "/etc/coturn/turnserver.conf"]
