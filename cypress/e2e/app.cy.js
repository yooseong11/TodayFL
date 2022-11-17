describe('example todayFL', () => {
	
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/dist/index.html');
	});
	
	it('첫 페이지가 날짜가 오늘이다. ', () => {
		const date = new Date()
		const Today = date.toISOString().split('T')[0]

		cy.get('#date').invoke('val').should('eq', Today)
  });

	it('날짜를 2022-03-16로 변경하면 오늘의 전장은 쇄빙이다. ', () => {
		cy.get('#date').type('2022-03-16')
		cy.get('#todayFL').invoke('text').should('eq', '쇄빙')
	}); 
	
	it('언어를 영어로 변경한다. ', () => {
		cy.get('#languages-menu').select('English (US)')
		cy.get('.secure').invoke('text').should('eq', 'Secure')
	});

	it('언어를 일본어로 변경한다. ', () => {
		cy.get('#languages-menu').select('日本語')
		cy.get('.secure').invoke('text').should('eq', '制圧')
	}); 
})	