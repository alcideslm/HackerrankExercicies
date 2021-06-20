/* 
* Realizado consulta ETL filtrando alunos com nota superior a nota de corte;
* Selecionado coluna nome e informações para ordenação ordenação em ETL;
* Realizado ordenação e exibido dados consultados em ETL.
*/

with top_students as (
    select 
          name
        , upper(SUBSTR ( name ,length(name)-2 , 3 )) as ending
        , id
    from students
    where marks > 75
)
select name
from top_students
order by ending, id
;
