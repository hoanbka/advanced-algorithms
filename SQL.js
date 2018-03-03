SQL 

select:

select * from cskh_hds.dbo.t_Termination_Call_Detail

select * from cskh_hds.dbo.Block_list_4G

select  ANI,GETDATE(),0
from cskh_hds.dbo.t_Termination_Call_Detail
where CallDispositionFlag =1 
--and DateTime >=dateadd(day,datediff(day,0,GETDATE()),0)
 group by ANI having count(ANI) >=10

 INSERT:

INSERT INTO cskh_hds.dbo.Block_list_4G
select  ANI,GETDATE(),0
from cskh_hds.dbo.t_Termination_Call_Detail
where CallDispositionFlag =1 
--and DateTime >=dateadd(day,datediff(day,0,GETDATE()),0)
 group by ANI having count(ANI) >=10
 except select ANI,GETDATE(),0 from cskh_hds.dbo.Block_list_4G

-----


