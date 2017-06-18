provincias = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33',''
              '34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52']

anios = ['1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016',]

f = open('download.sh', 'w')


# cambiar permisos del fichero generado para ejecutarlo chmod a+x download.sh
# ejecutar ./download.sh
# para querer ver URL de consulta http://www.ine.es/jaxi/Tabla.htm?path=/t20/e245/p05/a1998/l0/&file=00024001.px&L=0

f.write('#!/bin/bash\n')
f.write('\n')

for provincia in provincias:
    for anio in anios:

        str = "wget http://www.ine.es/jaxi/files/_px/es/csv_c/t20/e245/p05/a"+ anio +"/l0/000"+ provincia +"001.px?nocab=1 -O files/"+provincia+"-"+anio+".csv\n"
        print str
        f.write(str)

f.close()