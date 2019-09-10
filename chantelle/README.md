## GETTING STARTED
- `helm create chantelle`
- amend values.yaml (repo: kennethreitz/httpbin, tag:latest)
- authorise kubectl: <https://github.com/landtechnologies/k8-cluster>
- dry run `helm install --dry-run --debug ./chantelle --set service.internalPort=80`
- do some purging `helm del --purge chantelle`
- release `helm install --name chantelle --namespace default -f chantelle/values.yaml chantelle`

## INTERNAL ACCESS
- spin up an image to access your service `kubectl run --rm -it --image landtech/ci-base cmtest bash`
- curl it `curl chantelle`

## EXTERNAL ACCESS
https://medium.com/google-cloud/kubernetes-nodeport-vs-loadbalancer-vs-ingress-when-should-i-use-what-922f010849e0
https://gardener.cloud/050-tutorials/content/howto/service-access/
- use a service type of `LoadBalancer`, keep the port at 80 (standard for http)
- curl the endpoint when it's ready `curl http://a47f701c0ce5611e9889502fb2108057-36023580.eu-west-1.elb.amazonaws.com/status/418 -v`