<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Percabangan dan Perulangan</title>
    <!-- css -->
  <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.css">
  <link rel="stylesheet" href=" https://cdn.datatables.net/1.10.22/css/dataTables.bootstrap4.min.css">
</head>
<body onload="alert('Welcome to my table implementation logical')">
    <center>
		<h1>DATA MAHASISWA</script></h1>
	</center>
	<br>
<div class="container">

    <table id="data" class="table table-striped table-bordered" style="background-color: azure;">
        <thead class="text-center">
            <tr>
                <th>Nama</th>
                <th>NIM</th>
                <th>Jurusan</th>
                <th>Email</th>
                <th>Nilai</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>

        <?php 
            $mahasiswa = [
                [
                    "nama" => "Jay Park",
                    "nim" => "20200040063",
                    "jurusan" => "Teknik Informatika",
                    "email" => "jay_ti20@nusaputra.ac.id",
                    "nilai"=> 90
                ],
                [
                    "nama" => "Jay Park",
                    "nim" => "20200040063",
                    "jurusan" => "Teknik Informatika",
                    "email" => "jay_ti20@nusaputra.ac.id",
                    "nilai"=> 60,
                ],
                [
                    "nama" => "Jay Park",
                    "nim" => "20200040063",
                    "jurusan" => "Teknik Informatika",
                    "email" => "jay_ti20@nusaputra.ac.id",
                    "nilai"=> 80,
                ],
            ];

                for($i=0; $i<count($mahasiswa); $i++) {
                    $nilai = $mahasiswa[$i]['nilai'];    
        ?>
        <tr>
                <td><?php echo "{$mahasiswa[$i]['nama']}"; ?></td>
                <td><?php echo "{$mahasiswa[$i]['nim']}"; ?></td>
                <td><?php echo "{$mahasiswa[$i]['jurusan']}"; ?></td>
                <td><?php echo "{$mahasiswa[$i]['email']}"; ?></td>
                <td><?php echo "{$mahasiswa[$i]['nilai']}"; ?></td>
                <td><?php 
                    if ($nilai > 60){
                        echo 'Lulus'; 
                    }else{
                        echo 'Tidak Lulus';
                    } ?></td>
            </tr>
        <?php }?>
        </tbody>      
    </table>
</div>
<!-- script -->
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src=" https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>
<script src=" https://cdn.datatables.net/1.10.22/js/dataTables.bootstrap4.min.js"></script>
<script>
    $(document).ready(function() {
      $('#data').DataTable();
  } );
 </script>
</body>
</html>