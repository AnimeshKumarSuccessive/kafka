# kafka
develop a consumer and producer using kafka



# setup KAFKA and Zookeeper

KAFKA is made in Java, we have to install JAVA and JDK before KAFKA.
then check java version with Java --version


after installation of JAVA, now we are ready to install kafka.

download the KAFKA from https://kafka.apache.org/downloads

binary scala 2.12  -> downloaded this.

# terminal

1. move to the downlaod folder, check kafka is there or not
2. unzip kafka
3. rename (KAFKA) and move to the home directory

check the path of KAFKA.

1. in home directory, check ll 
2. now go to the .bashrc and give the path of our kafka directory

another command

1. nano .bashrc 
2. give the path of our KAFKA  (ctrl+s) and (ctrl+x)


if we go to the ls bin, then there will be the .sh file where we will see the command to start zookeeper and all

1. just use one more command to check this path is working or not
    "kafka-topics.sh"

2. ls config
3. nano config/zookeeper.properties (setting up the correct log path here).


# Folder
create a new folder "data" where all the data to maintain backup for the kafka
create two more folder inside "data"  
1. zookeeper
2. server

# Terminal
1.  nano config/zookeeper.properties
(update dataDir) with update directory of zookeeper

same thing will do with the server
2. nano config/server.properties
(update dataDir) with update directory of server

now check kafka-zookeeper is running or not.
bin/zookeeper-server-start.sh config/zookeeper.properties

after running the zookeeper, we can now run kafka server
bin/kafka-server-start.sh config/server.properties

installation of KAFKA from https://www.conduktor.io/kafka/how-to-install-apache-kafka-on-linux


now create a producer and consumer, where producer will produce a mesage and consumer will consume that message