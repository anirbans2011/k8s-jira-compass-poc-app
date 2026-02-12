pipeline {
  agent any

  stages {

    stage('Checkout') {
      steps {
        git branch: 'main',
            url: 'https://github.com/anirbans2011/k8s-jira-compass-poc-app.git'
      }
    }

    stage('Build Backend Docker Image') {
      steps {
        sh '''
          docker build -t poc-backend:1.0 backend
        '''
      }
    }

    stage('Build Frontend Docker Image') {
      steps {
        sh '''
          docker build -t poc-frontend:1.0 frontend
        '''
      }
    }

  }
}
