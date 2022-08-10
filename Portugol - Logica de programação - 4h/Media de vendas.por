programa
{
	
	funcao inicio()
	{
		real jan,fev,mar,abr,mai,media,mediaPL
		cadeia vendedor
		
		escreva("Nome do vendedor: ")
		leia(vendedor)
		escreva("Digite o valor total das vendas do mes de janeiro:")
		leia(jan)
		escreva("Digite o valor total das vendas do mes de fevereiro:")
		leia(fev)
		escreva("Digite o valor total das vendas do mes de março:")
		leia(mar)
		escreva("Digite o valor total das vendas do mes de abril:")
		leia(abr)
		escreva("Digite o valor total das vendas do mes de maio:")
		leia(mai)
		
		media = (jan+fev+mar+abr+mai)/5
		mediaPL = media*55/100
		
		escreva("O vendedor " + vendedor + " obteve uma media bruta de vendas de " + media + " e uma media de lucros livre de " + mediaPL)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 731; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */