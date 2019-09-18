Do EVERYTHING on sandbox... `aws-assume-role --account sandbox` then `asp sandbox`

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
- curl the endpoint when it's ready `curl $(kubectl get svc chantelle -o json | jq -r '.status.loadBalancer.ingress[0].hostname')/status/418 -v`


{"created" : { $gte: new ISODate("2019-08-16T15:00:00Z"), $lte: new ISODate("2019-09-03T12:00:00Z") }}

## UPDATING THE DEPLOYMENT
- Amend the annotation on the deployment `updateTimestamp: 2019-09-17T15:29:00Z`
- Update the helm relese `helm upgrade -f chantelle/values.yaml chantelle ./chantelle --force` (--force needed if you want to update the distrubtion budget)