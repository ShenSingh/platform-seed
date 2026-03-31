module.exports = {
  apps : [{
    name   : "edusubmit-config-server",
    script : "java -jar ./edusubmit-config-server/target/edusubmit-config-server-0.0.1-SNAPSHOT.jar",
    log_file: "./logs/edusubmit-config-server.log"
  },
      {name   : "edusubmit-discovery-server",
        script : "java -jar ./edusubmit-discovery-server/target/edusubmit-discovery-server-0.0.1-SNAPSHOT.jar",
        log_file: "./logs/edusubmit-discovery-server.log"
      },
      {name   : "api-gateway",
        script : "java -jar ./edusubmit-api-gateway/target/edusubmit-api-gateway-0.0.1-SNAPSHOT.jar",
        log_file: "./logs/edusubmit-api-gateway.log"
    },

  ]
}
