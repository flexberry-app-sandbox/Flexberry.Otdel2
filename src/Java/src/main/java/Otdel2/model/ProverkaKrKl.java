package Otdel2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otdel2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ПроверкаКрКл
 */
@Entity(name = "IISOtdel2ПроверкаКрКл")
@Table(schema = "public", name = "ПроверкаКрКл")
public class ProverkaKrKl {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "ДоходыВМес")
    private Integer доходывмес;

    @Column(name = "СуммаЕжКр")
    private Integer суммаежкр;

    @Column(name = "НаличЗал")
    private Boolean наличзал;

    @Column(name = "НаличПоруч")
    private Boolean наличпоруч;

    @Column(name = "Одобрение")
    private Boolean одобрение;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZaklKrDog")
    @Convert("ZaklKrDog")
    @Column(name = "ЗаклКрДог", length = 16, unique = true, nullable = false)
    private UUID _zaklkrdogid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZaklKrDog", insertable = false, updatable = false)
    private ZaklKrDog zaklkrdog;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klienty")
    @Convert("Klienty")
    @Column(name = "Клиенты", length = 16, unique = true, nullable = false)
    private UUID _klientyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klienty", insertable = false, updatable = false)
    private Klienty klienty;


    public ProverkaKrKl() {
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

    public Integer getДоходыВМес() {
      return доходывмес;
    }

    public void setДоходыВМес(Integer доходывмес) {
      this.доходывмес = доходывмес;
    }

    public Integer getСуммаЕжКр() {
      return суммаежкр;
    }

    public void setСуммаЕжКр(Integer суммаежкр) {
      this.суммаежкр = суммаежкр;
    }

    public Boolean getНаличЗал() {
      return наличзал;
    }

    public void setНаличЗал(Boolean наличзал) {
      this.наличзал = наличзал;
    }

    public Boolean getНаличПоруч() {
      return наличпоруч;
    }

    public void setНаличПоруч(Boolean наличпоруч) {
      this.наличпоруч = наличпоруч;
    }

    public Boolean getОдобрение() {
      return одобрение;
    }

    public void setОдобрение(Boolean одобрение) {
      this.одобрение = одобрение;
    }


}