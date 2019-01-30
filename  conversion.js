function convertion(nombre){
	var Q,R;
	while(Q>=16){
		Q= floor(nombre/16);
		R= nombre-(Q/16);
		nombre=Q;
	}
}