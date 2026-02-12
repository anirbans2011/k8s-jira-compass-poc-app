pipeline {
  agent any

  environment {
    DOCKERHUB_USER = 'anirbansantra2011'
    BACKEND_IMAGE  = 'poc-backend'
    FRONTEND_IMAGE = 'poc-frontend'
  }

  stages {

    stage('Checkout') {
      steps {
        git 'https://github.com/anirbans2011/k8s-jira-compass-poc-app.git'
      }
    }

    stage('Build Images') {
      steps {
        sh '''
          docker build -t $BACKEND_IMAGE:1.0 backend
          docker build -t $FRONTEND_IMAGE:1.0 frontend
        '''
      }
    }

    stage('Docker Login') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'dockerhub-creds',
          usernameVariable: 'DH_USER',
          passwordVariable: 'DH_PASS'
        )]) {
          sh 'echo $DH_PASS | docker login -u $DH_USER --password-stdin'
        }
      }
    }

    stage('Tag & Push Images') {
      steps {
        sh '''
          docker tag $BACKEND_IMAGE:1.0 $DOCKERHUB_USER/$BACKEND_IMAGE:1.0
          docker push $DOCKERHUB_USER/$BACKEND_IMAGE:1.0

          docker tag $FRONTEND_IMAGE:1.0 $DOCKERHUB_USER/$FRONTEND_IMAGE:1.0
          docker push $DOCKERHUB_USER/$FRONTEND_IMAGE:1.0
        '''
      }
    }
  }
}
