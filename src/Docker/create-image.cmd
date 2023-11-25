docker build --no-cache -f SQL\Dockerfile.PostgreSql -t otdel2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t otdel2/app ../..
