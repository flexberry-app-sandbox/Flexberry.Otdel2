package Otdel2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otdel2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ЗаклКрДог
 */
@Entity(name = "IISOtdel2ЗаклКрДог")
@Table(schema = "public", name = "ЗаклКрДог")
public class ZaklKrDog {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "ЦельКр")
    private String целькр;

    @Column(name = "ВидПогашКр")
    private String видпогашкр;

    @Column(name = "ВидКредита")
    private String видкредита;

    @Column(name = "СуммаКредита")
    private Integer суммакредита;

    @Column(name = "НомерКрДог")
    private Integer номеркрдог;

    @Column(name = "СодержДогЗал")
    private String содерждогзал;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klienty")
    @Convert("Klienty")
    @Column(name = "Клиенты", length = 16, unique = true, nullable = false)
    private UUID _klientyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klienty", insertable = false, updatable = false)
    private Klienty klienty;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;


    public ZaklKrDog() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getЦельКр() {
      return целькр;
    }

    public void setЦельКр(String целькр) {
      this.целькр = целькр;
    }

    public String getВидПогашКр() {
      return видпогашкр;
    }

    public void setВидПогашКр(String видпогашкр) {
      this.видпогашкр = видпогашкр;
    }

    public String getВидКредита() {
      return видкредита;
    }

    public void setВидКредита(String видкредита) {
      this.видкредита = видкредита;
    }

    public Integer getСуммаКредита() {
      return суммакредита;
    }

    public void setСуммаКредита(Integer суммакредита) {
      this.суммакредита = суммакредита;
    }

    public Integer getНомерКрДог() {
      return номеркрдог;
    }

    public void setНомерКрДог(Integer номеркрдог) {
      this.номеркрдог = номеркрдог;
    }

    public String getСодержДогЗал() {
      return содерждогзал;
    }

    public void setСодержДогЗал(String содерждогзал) {
      this.содерждогзал = содерждогзал;
    }


}