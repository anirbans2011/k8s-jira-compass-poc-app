pipeline {
  agent any

  stages {

    stage('Checkout') {
      steps {
        git branch: 'main',
            url: 'https://github.com/anirbans2011/k8s-jira-compass-poc-app.git'
      }
    }

    stage('Build Backend Image (Podman)') {
      steps {
        sh '''
          cd backend
          podman build -t backend-app:1.0 .
        '''
      }
    }

    stage('Build Frontend Image (Podman)') {
      steps {
        sh '''
          cd frontend
          podman build -t frontend-app:1.0 .
        '''
      }
    }

  }
}
