



CREATE TABLE "ОтделКр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Организация"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Клиенты"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИОКлиента" NVARCHAR2(255) NULL,

	"ИНН" NUMBER(10) NULL,

	"КПП" NUMBER(10) NULL,

	"Телефон" NUMBER(10) NULL,

	"МестоРаботы" NVARCHAR2(255) NULL,

	"ЮрАдрес" NVARCHAR2(255) NULL,

	"ФактАдрес" NVARCHAR2(255) NULL,

	"СтажРаботы" NUMBER(10) NULL,

	"НомКрДог" NUMBER(10) NULL,

	"РасчСчет" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDДолжности" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЗаклКрДог"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"ЦельКр" NVARCHAR2(255) NULL,

	"ВидПогашКр" NVARCHAR2(8) NULL,

	"ВидКредита" NVARCHAR2(12) NULL,

	"СуммаКредита" NUMBER(10) NULL,

	"НомерКрДог" NUMBER(10) NULL,

	"СодержДогЗал" NVARCHAR2(255) NULL,

	"Клиенты" RAW(16) NOT NULL,

	"Организация" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПроверкаКрКл"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"ДоходыВМес" NUMBER(10) NULL,

	"СуммаЕжКр" NUMBER(10) NULL,

	"НаличЗал" NUMBER(1) NULL,

	"НаличПоруч" NUMBER(1) NULL,

	"Одобрение" NUMBER(1) NULL,

	"Организация" RAW(16) NOT NULL,

	"ЗаклКрДог" RAW(16) NOT NULL,

	"Клиенты" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудники"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПогашКр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"ВидПогашКр" NVARCHAR2(8) NULL,

	"СуммаПогашКр" NUMBER(10) NULL,

	"ЗаклКрДог" RAW(16) NOT NULL,

	"Организация" RAW(16) NOT NULL,

	"Клиенты" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ОтделКр"
	ADD CONSTRAINT "ОтделКр_FСотр_8098" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ОтделКр_IСотр_4333" on "ОтделКр" ("Сотрудники");

ALTER TABLE "ЗаклКрДог"
	ADD CONSTRAINT "ЗаклКрДог_FКл_4270" FOREIGN KEY ("Клиенты") REFERENCES "Клиенты" ("primaryKey");

CREATE INDEX "ЗаклКрДог_IКл_8916" on "ЗаклКрДог" ("Клиенты");

ALTER TABLE "ЗаклКрДог"
	ADD CONSTRAINT "ЗаклКрДог_FОр_7086" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "ЗаклКрДог_IОр_7692" on "ЗаклКрДог" ("Организация");

ALTER TABLE "ПроверкаКрКл"
	ADD CONSTRAINT "ПроверкаКрКл__8443" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "ПроверкаКрКл__1173" on "ПроверкаКрКл" ("Организация");

ALTER TABLE "ПроверкаКрКл"
	ADD CONSTRAINT "ПроверкаКрКл__3268" FOREIGN KEY ("ЗаклКрДог") REFERENCES "ЗаклКрДог" ("primaryKey");

CREATE INDEX "ПроверкаКрКл__1123" on "ПроверкаКрКл" ("ЗаклКрДог");

ALTER TABLE "ПроверкаКрКл"
	ADD CONSTRAINT "ПроверкаКрКл__1466" FOREIGN KEY ("Клиенты") REFERENCES "Клиенты" ("primaryKey");

CREATE INDEX "ПроверкаКрКл_I_750" on "ПроверкаКрКл" ("Клиенты");

ALTER TABLE "Сотрудники"
	ADD CONSTRAINT "Сотрудники_FД_4635" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Сотрудники_IД_6967" on "Сотрудники" ("Должности");

ALTER TABLE "ПогашКр"
	ADD CONSTRAINT "ПогашКр_FЗакл_6833" FOREIGN KEY ("ЗаклКрДог") REFERENCES "ЗаклКрДог" ("primaryKey");

CREATE INDEX "ПогашКр_IЗаклК_449" on "ПогашКр" ("ЗаклКрДог");

ALTER TABLE "ПогашКр"
	ADD CONSTRAINT "ПогашКр_FОрга_4508" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "ПогашКр_IОрга_4738" on "ПогашКр" ("Организация");

ALTER TABLE "ПогашКр"
	ADD CONSTRAINT "ПогашКр_FКлиен_792" FOREIGN KEY ("Клиенты") REFERENCES "Клиенты" ("primaryKey");

CREATE INDEX "ПогашКр_IКлиенты" on "ПогашКр" ("Клиенты");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


