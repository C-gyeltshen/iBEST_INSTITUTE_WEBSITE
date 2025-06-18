
pipeline {
    agent any

    tools {
        nodejs 'NodeJS'  // The name must exactly match what's configured in "Manage Jenkins" > "Global Tool Configuration"
    }

    environment {
        DOCKER_CREDS = credentials('GITHUB_CREDENTIALS')
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t gyelltshen23/yourimage:tag .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh '''
                    echo $DOCKER_CREDS_PSW | docker login -u $DOCKER_CREDS_USR --password-stdin
                    docker push yourname/yourimage:tag
                    docker logout
                '''
            }
        }
    }
}
