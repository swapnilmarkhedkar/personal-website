# personal-website

### Live link - https://swapnilmarkhedkar.com/

## Setup one for yourself:

Fork and clone to your machine. Make the necessary changes. If you want a better format (such as JSON) do raise a pull request.

#### Deploy to cloud service
I have chosen AWS EC2 (Ubuntu 20, t2.micro), but feel free to choose any.

* Install apache2 (httpd) and follow the instructions: https://ubuntu.com/tutorials/install-and-configure-apache#2-installing-apache
* Clone repo to ``` /var/www/html/ ``` you should now be able to access it over the public IP over http port 80
* Register an Elastic IP to ensure virtual IP stays constant

#### Link to Domain Name

* Purchase a domain via sites like GoDaddy
* Within 'Manage DNS' point A record to the Elastic IP
* For enabling traffic over https SSL certificate is needed for certificate handshake. [For more info read about SSL/TLS Handshake](https://www.cloudflare.com/en-gb/learning/ssl/what-happens-in-a-tls-handshake/)
* Use [Certbot](https://certbot.eff.org/) to quikly add these certificates
* Voila!

##### Hints and suggestions

* Make sure to enable all traffic over http and https in security groups
* [For using AWS DNS](https://stackoverflow.com/questions/41366982/register-godaddy-domain-with-aws-ec2-instance)
