import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  datos = [
    {
      "idOrden": "2",
      "idGrupo": "1", 
      "idNivel": "2",
      "idIdentificador": "239392", 
      "descripcion": "TERRITORIO METRO NORTE",
      "idTipoCuenta": "0"
    },
    {
      "idOrden": "3", 
      "idGrupo": "1",
      "idNivel": "3",
      "idIdentificador": "239782",
      "descripcion": "ZONA FORMATOS PROPIOS Y TERCEROS METRO NORTE", 
      "idTipoCuenta": "0"
    },
    {
      "idOrden": "4",
      "idGrupo": "1",
      "idNivel": "4", 
      "idIdentificador": "239499",
      "descripcion": "REGION FORMATOS PROPIOS AZCAPOTZALCO",
      "idTipoCuenta": "0"
    },
    {
      "idOrden": "5",
      "idGrupo": "1",
      "idNivel": "5",
      "idIdentificador": "4349",
      "descripcion": "EKT ANAHUAC MEX TACUBA",
      "idTipoCuenta": "0"
    },
    {
      "idOrden": "6",
      "idGrupo": "1",
      "idNivel": "6",
      "idIdentificador": "1138830",
      "descripcion": "BALDERAS JIMENEZ GUILLERMO ZAYEL",
      "idTipoCuenta": "0"
    },
    {
      "idOrden": "7",
      "idGrupo": "1",
      "idNivel": "6",
      "idIdentificador": "1149254",
      "descripcion": "CABALLERO CONTRERAS SAUL ISRAEL",
      "idTipoCuenta": "0"
    },
    {
      "idOrden": "472",
      "idGrupo": "1",
      "idNivel": "2",
      "idIdentificador": "239400",
      "descripcion": "TERRITORIO METRO ORIENTE",
      "idTipoCuenta": "0"
    },
    {
      "idOrden": "473",
      "idGrupo": "1",
      "idNivel": "3",
      "idIdentificador": "239414",
      "descripcion": "ZONA FORMATOS PROPIOS Y TERCEROS METRO ORIENTE",
      "idTipoCuenta": "0"
    },
    {
      "idOrden": "474",
      "idGrupo": "1",
      "idNivel": "4",
      "idIdentificador": "239481",
      "descripcion": "REGION FORMATOS PROPIOS AEROPUERTO",
      "idTipoCuenta": "0"
    },
    {
      "idOrden": "475",
      "idGrupo": "1",
      "idNivel": "5",
      "idIdentificador": "1100",
      "descripcion": "DAZ AEROPUERTO T2",
      "idTipoCuenta": "0"
    },
    {
      "idOrden": "476",
      "idGrupo": "1",
      "idNivel": "6",
      "idIdentificador": "1051373",
      "descripcion": "CASTILLO PIÑA ALEJANDRO GONZALO",
      "idTipoCuenta": "0"
    }
  ];

  menores: any[] = [];
  mayores: any[] = [];

  ngOnInit() {
    console.log(this.datos);
    this.procesarDatos();
    
  }
  
  ngAfterViewInit() {
    console.log('=== GRUPO MENORES (Niveles 1, 2, 3) ===');
    console.log(this.menores);
    
    console.log('=== GRUPO MAYORES (Niveles 4, 5) ===');
    console.log(this.mayores);
  }

  procesarDatos() {
    
    const datosProcesados = this.datos.map(dato => {
      const nuevoDato = {
        ...dato,
        idNivel: (parseInt(dato.idNivel) -1 ).toString(),
        descripcion: dato.descripcion.split(' ')[0]
      };
      
      return nuevoDato;
    });

    this.menores = datosProcesados.filter(dato => 
      ['1', '2', '3'].includes(dato.idNivel)
    );
    
    this.mayores = datosProcesados.filter(dato => 
      ['4', '5'].includes(dato.idNivel)
    );

  }
}