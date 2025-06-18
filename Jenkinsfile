pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        DOCKER_IMAGE = 'gyelltshen23/ibest-institute'
        DOCKER_TAG = "${env.BUILD_ID}"  // Uses Jenkins build ID instead of 'latest'
        DOCKER_REGISTRY = 'docker.io'
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
                    sh """
                        docker build \
                            --platform linux/amd64 \
                            -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                    """
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'DOCKER_HUB_CREDENTIALS',  // Updated credential ID
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh """
                        echo \"${DOCKER_PASS}\" | docker login -u \"${DOCKER_USER}\" --password-stdin ${DOCKER_REGISTRY}
                        docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                    """
                }
            }
        }
    }

    post {
        always {
            sh 'docker logout'  // Clean up credentials
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed! Check logs for details.'
        }
    }
}