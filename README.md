This folder includes node.js restful api which is written for a company case study.

This is an API project that converts web url links to deeplinks or deeplinks to web url in certain formats.

Technologies and Tools I use:

:ballot_box_with_check: Back-end: Node.js => Nest.js

:ballot_box_with_check: Database: PostgreSql

:ballot_box_with_check: TypeScript, TypeORM

:ballot_box_with_check: Testing: Jest

:ballot_box_with_check: Docker

### Usage

Clone the repository

```
cd desktop
git clone https://github.com/mavisalli/Link-Converter-Case-NestJs.git
```

Then open the project in ide and follow below commands:

Create environment file (.development.env) for your config information of your database and fill the content as below

#### Postgres config

```
TYPE=
HOST=
PORT=
USER=
PASSWORD=
DATABASE=
```

Install dependencies and run app server with development mode

```
npm install
npm run start:dev
```

There are 12 function tests for all link formats specified in the case file.

```
npm run test
```

## Usage with Docker

```
docker-compose up -d
```

### Testing

```
docker exec link-converter_backend_1 npm run test
```

## API Details

`POST /url-to-deeplink`

Convert URLs to deeplinks. Example request body:

```
{
    "source": "https://www.trendyol.com/casio/saat-p-1925865?boutiqueId=439892&merchantId=105064"
}
```

Response to this request:

```
{
    "source": "https://www.trendyol.com/casio/saat-p-1925865?boutiqueId=439892&merchantId=105064",
    "target": "ty://?Page=Product&ContentId=1925865&CampaignId=439892&MerchantId=105064",
    "id": 1
}
```

`POST /deeplink-to-url`

Convert deeplinks to URLs. Example request body:

```
{
    "source": "ty://?Page=Product&ContentId=1925865&CampaignId=439892&MerchantId=105064"
}
```

Response to this request:

```
{
    "source": "ty://?Page=Product&ContentId=1925865&CampaignId=439892&MerchantId=105064",
    "target": "https://www.trendyol.com/brand/name-p-1925865?boutiqueId=439892&merchantId=105064",
    "id": 2
}
```

### Postman Collection

https://www.postman.com/mavibaris/workspace/trendyol-case/collection/16085875-0608311d-3cfd-4666-8b78-0e6314286a55
