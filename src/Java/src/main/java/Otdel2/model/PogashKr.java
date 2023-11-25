package Otdel2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otdel2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ПогашКр
 */
@Entity(name = "IISOtdel2ПогашКр")
@Table(schema = "public", name = "ПогашКр")
public class PogashKr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "ВидПогашКр")
    private String видпогашкр;

    @Column(name = "СуммаПогашКр")
    private Integer суммапогашкр;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZaklKrDog")
    @Convert("ZaklKrDog")
    @Column(name = "ЗаклКрДог", length = 16, unique = true, nullable = false)
    private UUID _zaklkrdogid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZaklKrDog", insertable = false, updatable = false)
    private ZaklKrDog zaklkrdog;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klienty")
    @Convert("Klienty")
    @Column(name = "Клиенты", length = 16, unique = true, nullable = false)
    private UUID _klientyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klienty", insertable = false, updatable = false)
    private Klienty klienty;


    public PogashKr() {
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

    public String getВидПогашКр() {
      return видпогашкр;
    }

    public void setВидПогашКр(String видпогашкр) {
      this.видпогашкр = видпогашкр;
    }

    public Integer getСуммаПогашКр() {
      return суммапогашкр;
    }

    public void setСуммаПогашКр(Integer суммапогашкр) {
      this.суммапогашкр = суммапогашкр;
    }


}