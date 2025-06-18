pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        DOCKER_IMAGE = 'gyelltshen23/ibest-institute'
        DOCKER_TAG = 'latest'
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
                    // Reset Docker config to avoid credential helper issues
                    sh 'echo \'{"auths":{}}\' > ~/.docker/config.json'
                    
                    // Build with explicit platform for macOS/Linux compatibility
                    sh '''
                        /usr/local/bin/docker build \
                            --platform linux/amd64 \
                            -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                    '''
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'GITHUB_CREDENTIALS',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                        /usr/local/bin/docker login -u $DOCKER_USER -p $DOCKER_PASS
                        /usr/local/bin/docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                    '''
                }
            }
        }
    }
}