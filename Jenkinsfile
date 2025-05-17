pipeline {
  agent any

  tools {
    nodejs 'NodeJS'  // Matches the name in Global Tool Configuration
  }

  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test -- --ci --reporters=jest-junit'
      }
      post {
        always {
          junit 'junit.xml'  // Path to test report
        }
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'  // Useful for Next.js or React apps
      }
    }
    stage('Deploy') {
      steps {
        sh 'echo "Deploying to staging..."'
        // Add your actual deployment steps here (e.g. SSH, Docker, etc.)
      }
    }
  }
}
