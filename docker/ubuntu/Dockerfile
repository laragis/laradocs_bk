FROM ubuntu
LABEL maintainer="Truong Thanh Tung <ttungbmt@gmail.com>"

ENV DEBIAN_FRONTEND noninteractive
ENV TZ=Asia/Ho_Chi_Minh

RUN apt-get update -y

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get install -y  \
    iputils-ping telnet \
    curl wget \
    bat exa \
    git vim

RUN apt-get install -y zsh
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
RUN yes | bash -c "$(curl --fail --show-error --silent --location https://raw.githubusercontent.com/zdharma-continuum/zinit/HEAD/scripts/install.sh)" && \
    exec zsh && \
    zinit self-update

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