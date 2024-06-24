describe('login cn blogs', () => {
    it('login', () => {
        const WAIT_MS = SETTINGS.WAIT_MS
        cy.visit('https://account.cnblogs.com/signin?ReturnUrl=%2Fsettings')
        cy.get('input[formcontrolname="username"]').type(ACCOUNT.cnblogs.username);
        cy.get('input[formcontrolname="password"]').type(ACCOUNT.cnblogs.password);
        cy.contains('button', '登录').click();
        cy.wait(WAIT_MS);
        cy.get('.sm-btn').click();
        cy.wait(WAIT_MS);
        cy.visit('https://i.cnblogs.com/posts/edit')
        cy.get('#post-title').type(POST.title);
        cy.get('#editor-switcher').click();
        cy.contains('.ant-dropdown-menu-item', 'Markdown（默认 markdown 编辑器）').click();
        cy.get('#md-editor').type(POST.content);
        cy.get('[data-el-locator="publishBtn"]').click();
        cy.wait(WAIT_MS);
        cy.contains('发布成功').should('be.visible');
    })
})
