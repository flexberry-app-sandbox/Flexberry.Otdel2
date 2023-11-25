package Otdel2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otdel2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Клиенты
 */
@Entity(name = "IISOtdel2Клиенты")
@Table(schema = "public", name = "Клиенты")
public class Klienty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИОКлиента")
    private String фиоклиента;

    @Column(name = "ИНН")
    private Integer инн;

    @Column(name = "КПП")
    private Integer кпп;

    @Column(name = "Телефон")
    private Integer телефон;

    @Column(name = "МестоРаботы")
    private String местоработы;

    @Column(name = "ЮрАдрес")
    private String юрадрес;

    @Column(name = "ФактАдрес")
    private String фактадрес;

    @Column(name = "СтажРаботы")
    private Integer стажработы;

    @Column(name = "НомКрДог")
    private Integer номкрдог;

    @Column(name = "РасчСчет")
    private Integer расчсчет;


    public Klienty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИОКлиента() {
      return фиоклиента;
    }

    public void setФИОКлиента(String фиоклиента) {
      this.фиоклиента = фиоклиента;
    }

    public Integer getИНН() {
      return инн;
    }

    public void setИНН(Integer инн) {
      this.инн = инн;
    }

    public Integer getКПП() {
      return кпп;
    }

    public void setКПП(Integer кпп) {
      this.кпп = кпп;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }

    public String getМестоРаботы() {
      return местоработы;
    }

    public void setМестоРаботы(String местоработы) {
      this.местоработы = местоработы;
    }

    public String getЮрАдрес() {
      return юрадрес;
    }

    public void setЮрАдрес(String юрадрес) {
      this.юрадрес = юрадрес;
    }

    public String getФактАдрес() {
      return фактадрес;
    }

    public void setФактАдрес(String фактадрес) {
      this.фактадрес = фактадрес;
    }

    public Integer getСтажРаботы() {
      return стажработы;
    }

    public void setСтажРаботы(Integer стажработы) {
      this.стажработы = стажработы;
    }

    public Integer getНомКрДог() {
      return номкрдог;
    }

    public void setНомКрДог(Integer номкрдог) {
      this.номкрдог = номкрдог;
    }

    public Integer getРасчСчет() {
      return расчсчет;
    }

    public void setРасчСчет(Integer расчсчет) {
      this.расчсчет = расчсчет;
    }


}