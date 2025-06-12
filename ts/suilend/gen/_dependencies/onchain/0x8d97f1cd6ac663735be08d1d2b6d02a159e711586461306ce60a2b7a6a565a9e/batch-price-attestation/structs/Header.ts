import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isHeader(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::batch_price_attestation::Header`;
}

export interface HeaderFields {
  magic: ToField<"u64">;
  versionMajor: ToField<"u64">;
  versionMinor: ToField<"u64">;
  headerSize: ToField<"u64">;
  payloadId: ToField<"u8">;
}

export type HeaderReified = Reified<Header, HeaderFields>;

/**
 * Move struct: `Header`
 * Module: `8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::batch_price_attestation`
 */
export class Header implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::batch_price_attestation::Header`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Header.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::batch_price_attestation::Header`;
  readonly $typeArgs: [];
  readonly $isPhantom = Header.$isPhantom;

  readonly magic: ToField<"u64">;
  readonly versionMajor: ToField<"u64">;
  readonly versionMinor: ToField<"u64">;
  readonly headerSize: ToField<"u64">;
  readonly payloadId: ToField<"u8">;

  private constructor(typeArgs: [], fields: HeaderFields) {
    this.$fullTypeName = composeSuiType(
      Header.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::batch_price_attestation::Header`;
    this.$typeArgs = typeArgs;

    this.magic = fields.magic;
    this.versionMajor = fields.versionMajor;
    this.versionMinor = fields.versionMinor;
    this.headerSize = fields.headerSize;
    this.payloadId = fields.payloadId;
  }

  static reified(): HeaderReified {
    return {
      typeName: Header.$typeName,
      fullTypeName: composeSuiType(
        Header.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::batch_price_attestation::Header`,
      typeArgs: [] as [],
      isPhantom: Header.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Header.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Header.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Header.fromBcs(data),
      bcs: Header.bcs,
      fromJSONField: (field: any) => Header.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Header.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => Header.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => Header.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Header.fetch(client, id),
      new: (fields: HeaderFields) => {
        return new Header([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Header.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Header>> {
    return phantom(Header.reified());
  }
  static get p() {
    return Header.phantom();
  }

  static get bcs() {
    return bcs.struct("Header", {
      magic: bcs.u64(),
      version_major: bcs.u64(),
      version_minor: bcs.u64(),
      header_size: bcs.u64(),
      payload_id: bcs.u8(),
    });
  }

  static fromFields(fields: Record<string, any>): Header {
    return Header.reified().new({
      magic: decodeFromFields("u64", fields.magic),
      versionMajor: decodeFromFields("u64", fields.version_major),
      versionMinor: decodeFromFields("u64", fields.version_minor),
      headerSize: decodeFromFields("u64", fields.header_size),
      payloadId: decodeFromFields("u8", fields.payload_id),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Header {
    if (!isHeader(item.type)) {
      throw new Error("not a Header type");
    }

    return Header.reified().new({
      magic: decodeFromFieldsWithTypes("u64", item.fields.magic),
      versionMajor: decodeFromFieldsWithTypes("u64", item.fields.version_major),
      versionMinor: decodeFromFieldsWithTypes("u64", item.fields.version_minor),
      headerSize: decodeFromFieldsWithTypes("u64", item.fields.header_size),
      payloadId: decodeFromFieldsWithTypes("u8", item.fields.payload_id),
    });
  }

  static fromBcs(data: Uint8Array): Header {
    return Header.fromFields(Header.bcs.parse(data));
  }

  toJSONField() {
    return {
      magic: this.magic.toString(),
      versionMajor: this.versionMajor.toString(),
      versionMinor: this.versionMinor.toString(),
      headerSize: this.headerSize.toString(),
      payloadId: this.payloadId,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): Header {
    return Header.reified().new({
      magic: decodeFromJSONField("u64", field.magic),
      versionMajor: decodeFromJSONField("u64", field.versionMajor),
      versionMinor: decodeFromJSONField("u64", field.versionMinor),
      headerSize: decodeFromJSONField("u64", field.headerSize),
      payloadId: decodeFromJSONField("u8", field.payloadId),
    });
  }

  static fromJSON(json: Record<string, any>): Header {
    if (json.$typeName !== Header.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Header.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Header {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isHeader(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Header object`);
    }
    return Header.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Header {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isHeader(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Header object`);
      }

      return Header.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Header.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Header> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Header object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isHeader(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Header object`);
    }

    return Header.fromSuiObjectData(res.data);
  }
}
