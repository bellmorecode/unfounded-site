-- # Tests

--select * from Chains

--select * from Contracts

-- delete from [Members]
-- delete from [EmailConfirmationCodes]

select *  from [EmailConfirmationCodes]

SELECT TOP (1000) [Id]
      ,[Name]
      ,[Email]
      ,[CreateDate]
      ,[IsEmailConfirmed]
      ,[IsActive]
  FROM [dbo].[Members]

  --Insert Into [Members] (Email, IsEmailConfirmed) values ('glenn@gfdata.io', 1)

--  update [Chains] set IsActive = 0 where [Name] Like '%Test%'