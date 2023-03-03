FROM ubuntu
LABEL maintainer="Truong Thanh Tung <ttungbmt@gmail.com>"

ENV DEBIAN_FRONTEND noninteractive
ENV TZ=Asia/Ho_Chi_Minh

RUN apt-get update -y

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone


###########################################################################
# Laradock non-root user:
###########################################################################

# Add a non-root user to prevent files being created with root permissions on host machine.
ARG PUID=1000
ENV PUID ${PUID}
ARG PGID=1000
ENV PGID ${PGID}

RUN groupadd --force -g $PGID laradock
RUN useradd -ms /bin/bash --no-user-group -g $PGID -u $PUID laradock


#
#--------------------------------------------------------------------------
# Final Touch
#--------------------------------------------------------------------------
#

## Clean up
#RUN apt-get -y autoremove \
#    && apt-get clean \
#    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*