pipeline {
  agent any

  tools {
    nodejs 'NodeJS'  // Matches the name in Global Tool Configuration
  }

  stages {
    stage('Install') {
      steps {
        sh 'npm install'
        // Install jest-junit explicitly in case it's missing
        sh 'npm install --save-dev @babel/preset-env @babel/preset-react babel-jest jest jest-environment-jsdom jest-junit identity-obj-proxy'
      }
    }
    stage('Test') {
      steps {
        // Simplified test command - let package.json handle the reporter config
        sh 'npm test'
      }
      post {
        always {
          // Look for report in the default location
          junit '**/junit.xml'  
        }
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      steps {
        sh 'echo "Deploying to staging..."'
        // Add your actual deployment steps here
      }
    }
  }
}