# GeoServer

```shell title=".env"
TOMCAT_USER=admin
TOMCAT_PASS=tomcat

GEOSERVER_VERSION=2.22.2
GEOSERVER_PORT=8080
GEOSERVER_ADMIN_USER=admin
GEOSERVER_ADMIN_PASSWORD=geoserver
GEOSERVER_DATA=geoserver_data

SAMPLE_DATA=true
STABLE_EXTENSIONS=css-plugin,ogcapi-plugin
INITIAL_MEMORY=2G
MAXIMUM_MEMORY=4G
```

```yaml title="docker-compose.yml"
volumes:
  geoserver_data:

services:
  geoserver:
    image: kartoza/geoserver:${GEOSERVER_VERSION}
    restart: on-failure
    environment:
      - TOMCAT_USER=${TOMCAT_USER}
      - TOMCAT_PASS=${TOMCAT_PASS}
      - GEOSERVER_ADMIN_USER=${GEOSERVER_ADMIN_USER}
      - GEOSERVER_ADMIN_PASSWORD=${GEOSERVER_ADMIN_PASSWORD}
      - STABLE_EXTENSIONS=${STABLE_EXTENSIONS}
      - INITIAL_MEMORY=${INITIAL_MEMORY}
      - MAXIMUM_MEMORY=${MAXIMUM_MEMORY}
      - SAMPLE_DATA=${SAMPLE_DATA}
      - XFRAME_OPTIONS="false"
    volumes:
      - ${GEOSERVER_DATA}:/opt/geoserver_data
    ports:
      - "${GEOSERVER_PORT}:8080"
```