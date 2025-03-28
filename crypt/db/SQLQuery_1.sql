-- Bulk Load Contracts. 
select * from Chains

-- Suggestions from Psysci
-- zedrun
--Insert into [Contracts] ([ApprovedOn], [ApprovedById], [ProposedById], [TokenType], [Name], [ChainId], [Address]) 
--values (GetUtcDate(), '7008015f-b460-48ec-9482-b0e8b4a09028', '7008015f-b460-48ec-9482-b0e8b4a09028', 'ERC-721', 'ZED RUN', '0x89', '0x67f4732266c7300cca593c814d46bee72e40659f')

--Insert into [Contracts] ([ApprovedOn], [ApprovedById], [ProposedById], [TokenType], [Name], [ChainId], [Address]) 
--values (GetUtcDate(), '7008015f-b460-48ec-9482-b0e8b4a09028', '7008015f-b460-48ec-9482-b0e8b4a09028', 'ERC-721', 'ZED RUN', '0x2105', '0xf97908c0c4130830a3fd5f8c51d07a18787ac626')

Insert into [Contracts] ([ApprovedOn], [ApprovedById], [ProposedById], [TokenType], [Name], [ChainId], [Address]) 
values (GetUtcDate(), '7008015f-b460-48ec-9482-b0e8b4a09028', '7008015f-b460-48ec-9482-b0e8b4a09028', 'ERC-721', 'ZED RUN', '0x2105', '0xf97908c0c4130830a3fd5f8c51d07a18787ac626')