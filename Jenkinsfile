pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/anirbans2011/k8s-jira-compass-poc-app.git'
      }
    }

    stage('Build Backend') {
      steps {
        sh 'cd backend && mvn clean package'
      }
    }

    stage('Build Images with Podman') {
      steps {
        sh '''
          podman build -t backend-app backend
          podman build -t frontend-app frontend
        '''
      }
    }
  }
}
