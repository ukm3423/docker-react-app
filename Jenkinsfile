pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials-id'
        GITHUB_CREDENTIALS_ID = 'github-credentials-id'
        DOCKER_IMAGE_NAME = 'umeshkumarchamp/docker-react-app'
        NODE_VERSION = '20.x'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', credentialsId: "${GITHUB_CREDENTIALS_ID}", url: 'https://github.com/ukm3423/docker-react-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Use NodeJS installation
                // tool name: 'NodeJS', type: 'NodeJSInstallation'
                script {    
                    bat 'npm install'
                }
            }
        }

        stage('Build Application') {
            steps {
                bat 'npm run build' // Adjust this if you use a different build command
            }
        }

        // stage('Run Tests') {
        //     steps {
        //         // Run tests using npm
        //         bat 'npm test'
        //     }
        // }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    bat '''
                        docker build -t %DOCKER_IMAGE_NAME% .
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Log in to Docker Hub
                    withDockerRegistry([credentialsId: "$DOCKER_CREDENTIALS_ID", url: 'https://index.docker.io/v1/']) {
                        // Push Docker image to Docker Hub
                        bat '''
                            docker push %DOCKER_IMAGE_NAME%
                        '''
                    }
                }
            }
        }
    }

    post {
        always {
            // Clean up Docker images
            bat 'docker system prune -af'
        }
    }
}
