pipeline {
  agent any

  tools {
    nodejs 'NodeJS' 
    IMAGE_NAME = 'gyeltshen23/A1' 
    DOCKER_CREDS = credentials('GITHUB_CREDENTIALS')      
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci' // Better for CI builds than `npm install`
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
          def tag = "${IMAGE_NAME}:${env.BUILD_NUMBER}"
          sh "docker build -t $tag ."
        }
      }
    }

    stage('Push to Docker Hub') {
      steps {
        script {
          def tag = "${IMAGE_NAME}:${env.BUILD_NUMBER}"
          sh """
            echo $DOCKER_CREDS_PSW | docker login -u $DOCKER_CREDS_USR --password-stdin
            docker push $tag
          """
        }
      }
    }
  }

  post {
    always {
      sh 'docker logout'
      cleanWs()
    }
    success {
      echo "✅ Docker image pushed successfully."
    }
    failure {
      echo "❌ Pipeline failed. Check the logs above."
    }
  }
}
