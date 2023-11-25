




CREATE TABLE ОтделКр (
 primaryKey UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Организация (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Клиенты (
 primaryKey UUID NOT NULL,
 ФИОКлиента VARCHAR(255) NULL,
 ИНН INT NULL,
 КПП INT NULL,
 Телефон INT NULL,
 МестоРаботы VARCHAR(255) NULL,
 ЮрАдрес VARCHAR(255) NULL,
 ФактАдрес VARCHAR(255) NULL,
 СтажРаботы INT NULL,
 НомКрДог INT NULL,
 РасчСчет INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 IDДолжности INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЗаклКрДог (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 ЦельКр VARCHAR(255) NULL,
 ВидПогашКр VARCHAR(8) NULL,
 ВидКредита VARCHAR(12) NULL,
 СуммаКредита INT NULL,
 НомерКрДог INT NULL,
 СодержДогЗал VARCHAR(255) NULL,
 Клиенты UUID NOT NULL,
 Организация UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПроверкаКрКл (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 ДоходыВМес INT NULL,
 СуммаЕжКр INT NULL,
 НаличЗал BOOLEAN NULL,
 НаличПоруч BOOLEAN NULL,
 Одобрение BOOLEAN NULL,
 Организация UUID NOT NULL,
 ЗаклКрДог UUID NOT NULL,
 Клиенты UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 Должности UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПогашКр (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 ВидПогашКр VARCHAR(8) NULL,
 СуммаПогашКр INT NULL,
 ЗаклКрДог UUID NOT NULL,
 Организация UUID NOT NULL,
 Клиенты UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ОтделКр ADD CONSTRAINT FK336927f3465adc2129e29dbdbe8bfae60371652f FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index336927f3465adc2129e29dbdbe8bfae60371652f on ОтделКр (Сотрудники); 

 ALTER TABLE ЗаклКрДог ADD CONSTRAINT FKeed1e59c1033675b9ff6189511fd470a4c12198a FOREIGN KEY (Клиенты) REFERENCES Клиенты; 
CREATE INDEX Indexeed1e59c1033675b9ff6189511fd470a4c12198a on ЗаклКрДог (Клиенты); 

 ALTER TABLE ЗаклКрДог ADD CONSTRAINT FK05d1a985df0c7047e776aafa47aa0cdc1d0c6a82 FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Index05d1a985df0c7047e776aafa47aa0cdc1d0c6a82 on ЗаклКрДог (Организация); 

 ALTER TABLE ПроверкаКрКл ADD CONSTRAINT FKd90867879e674c76a3b1089784040a93d2ca9124 FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Indexd90867879e674c76a3b1089784040a93d2ca9124 on ПроверкаКрКл (Организация); 

 ALTER TABLE ПроверкаКрКл ADD CONSTRAINT FK941b6bb62d1f1114938f4937b7c53c45b06b6a8e FOREIGN KEY (ЗаклКрДог) REFERENCES ЗаклКрДог; 
CREATE INDEX Index941b6bb62d1f1114938f4937b7c53c45b06b6a8e on ПроверкаКрКл (ЗаклКрДог); 

 ALTER TABLE ПроверкаКрКл ADD CONSTRAINT FK8ea9a568f90b075a7ab4bb12b0632cc6cbf8ef4a FOREIGN KEY (Клиенты) REFERENCES Клиенты; 
CREATE INDEX Index8ea9a568f90b075a7ab4bb12b0632cc6cbf8ef4a on ПроверкаКрКл (Клиенты); 

 ALTER TABLE Сотрудники ADD CONSTRAINT FKe5ecf5036053539899cbfb65cf7383292844b1ec FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Indexe5ecf5036053539899cbfb65cf7383292844b1ec on Сотрудники (Должности); 

 ALTER TABLE ПогашКр ADD CONSTRAINT FKd3a77f20e6fcff0dafdb745023e6c2fcfc225e29 FOREIGN KEY (ЗаклКрДог) REFERENCES ЗаклКрДог; 
CREATE INDEX Indexd3a77f20e6fcff0dafdb745023e6c2fcfc225e29 on ПогашКр (ЗаклКрДог); 

 ALTER TABLE ПогашКр ADD CONSTRAINT FKc08eed9469a2a46a9b366b57e7ec18e5034da58a FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Indexc08eed9469a2a46a9b366b57e7ec18e5034da58a on ПогашКр (Организация); 

 ALTER TABLE ПогашКр ADD CONSTRAINT FK54f0c38b0faebc5fe39d02725d950af0dddd2335 FOREIGN KEY (Клиенты) REFERENCES Клиенты; 
CREATE INDEX Index54f0c38b0faebc5fe39d02725d950af0dddd2335 on ПогашКр (Клиенты); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

