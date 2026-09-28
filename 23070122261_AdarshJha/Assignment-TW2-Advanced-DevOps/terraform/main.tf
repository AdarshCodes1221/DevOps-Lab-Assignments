terraform {

  required_providers {

    local = {
      source  = "hashicorp/local"
      version = "~> 2.0"
    }

  }

}


provider "local" {}


resource "local_file" "terraform_output" {

  filename = "output.txt"

  content = <<EOT
Terraform Infrastructure as Code (IaC) Task Completed Successfully.

This file was created using Terraform.
Project: TW2 - Advanced DevOps Practices
Application: Flask + PostgreSQL + Kubernetes + Jenkins
EOT

}