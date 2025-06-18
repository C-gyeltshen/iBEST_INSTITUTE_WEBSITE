pipeline {
    agent any

    tools {
        nodejs 'NodeJS'  // Must match Jenkins Global Tool Configuration
    }

    environment {
        DOCKER_IMAGE = 'gyelltshen23/ibest-institute'  // Your Docker Hub repository
        DOCKER_TAG = 'latest'                          // Tag for the image
        DOCKER_CREDS = credentials('GITHUB_CREDENTIALS') // Your Docker Hub credentials
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
                script {
                    // Use full Docker path to avoid "command not found"
                    sh '/usr/local/bin/docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    // Login using credentials
                    sh '''
                        echo $DOCKER_CREDS_PSW | /usr/local/bin/docker login -u $DOCKER_CREDS_USR --password-stdin
                        /usr/local/bin/docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                        /usr/local/bin/docker logout
                    '''
                }
            }
        }
    }
}