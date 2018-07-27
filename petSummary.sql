/*Please add ; after each select statement*/

CREATE PROCEDURE petSummary()
/*select * from pets where species = 'cat'; */

BEGIN
CREATE TABLE e SELECT * FROM pets;
SELECT CONCAT('CREATE TABLE r (',GROUP_CONCAT(DISTINCT CONCAT('`',species,'` TEXT')),')') INTO @j FROM e;



PREPARE t FROM @j;
EXECUTE t;

SET @s = (SELECT count(*) FROM e GROUP BY species ORDER BY 1 DESC LIMIT 1);

WHILE @s DO INSERT r VALUES(); SET @s = @s - 1; END WHILE;

WHILE (SELECT min(1) FROM e) DO
  SET @q = (SELECT CONCAT('UPDATE r
                           SET `',species,'` = "',name,'"
                           WHERE `',species,'` IS NULL
                           LIMIT 1') 
            FROM e LIMIT 1);

  PREPARE t FROM @q;
  EXECUTE t;
  DELETE FROM e LIM
IT 1;
END WHILE;
/*SELECT * FROM r; */
SELECT cat as cats, dog as dogs, weasel as weasels, chinchilla as chinchillas from r;
DROP TABLE r,e;
END

/*   Cach 2                             */

CREATE PROCEDURE petSummary()
BEGIN
    DECLARE d INT;
    DECLARE j TEXT;
    DECLARE c CURSOR FOR SELECT species FROM pets GROUP BY 1;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET d = 1;

    CREATE TABLE r (n INT UNIQUE);
    OPEN c;

    l: LOOP
        FETCH c INTO j;
        IF d THEN LEAVE l; END IF;
        SET @x = 0;
        
        ALTER TABLE r ADD t TEXT;
        
        INSERT INTO r (n, t)
        SELECT @x := @x + 1, name FROM pets e WHERE species = j COLLATE utf8_bin
        ON DUPLICATE KEY UPDATE n = @x, t = e.name;
        
        SET @m = CONCAT('ALTER TABLE r CHANGE t `', j, '` TEXT');
        PREPARE m FROM @m;
        EXECUTE m;

    END LOOP;

    ALTER TABLE r DROP n;
    SELECT cat as cats, dog as dogs, weasel as weasels, chinchilla as chinchillas from r;
    DROP TABLE r;
END