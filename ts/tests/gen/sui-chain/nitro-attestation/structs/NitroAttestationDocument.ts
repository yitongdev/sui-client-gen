import * as reified from "../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  fieldToJSON,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { Vector } from "../../../_framework/vector.js";
import { Option } from "../../../move-stdlib-chain/option/structs/index.js";
import { PKG_V31 } from "../../constants.js";
import { PCREntry as PCREntry1 } from "./PCREntry.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isNitroAttestationDocument(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::nitro_attestation::NitroAttestationDocument`;
}

export interface NitroAttestationDocumentFields {
  moduleId: ToField<Vector<"u8">>;
  timestamp: ToField<"u64">;
  digest: ToField<Vector<"u8">>;
  pcrs: ToField<Vector<PCREntry1>>;
  publicKey: ToField<Option<Vector<"u8">>>;
  userData: ToField<Option<Vector<"u8">>>;
  nonce: ToField<Option<Vector<"u8">>>;
}

export type NitroAttestationDocumentReified = Reified<
  NitroAttestationDocument,
  NitroAttestationDocumentFields
>;

/**
 * Move struct: `NitroAttestationDocument`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::nitro_attestation`
 */
export class NitroAttestationDocument implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::nitro_attestation::NitroAttestationDocument`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = NitroAttestationDocument.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::nitro_attestation::NitroAttestationDocument`;
  readonly $typeArgs: [];
  readonly $isPhantom = NitroAttestationDocument.$isPhantom;

  readonly moduleId: ToField<Vector<"u8">>;
  readonly timestamp: ToField<"u64">;
  readonly digest: ToField<Vector<"u8">>;
  readonly pcrs: ToField<Vector<PCREntry1>>;
  readonly publicKey: ToField<Option<Vector<"u8">>>;
  readonly userData: ToField<Option<Vector<"u8">>>;
  readonly nonce: ToField<Option<Vector<"u8">>>;

  private constructor(typeArgs: [], fields: NitroAttestationDocumentFields) {
    this.$fullTypeName = composeSuiType(
      NitroAttestationDocument.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::nitro_attestation::NitroAttestationDocument`;
    this.$typeArgs = typeArgs;

    this.moduleId = fields.moduleId;
    this.timestamp = fields.timestamp;
    this.digest = fields.digest;
    this.pcrs = fields.pcrs;
    this.publicKey = fields.publicKey;
    this.userData = fields.userData;
    this.nonce = fields.nonce;
  }

  static reified(): NitroAttestationDocumentReified {
    return {
      typeName: NitroAttestationDocument.$typeName,
      fullTypeName: composeSuiType(
        NitroAttestationDocument.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::nitro_attestation::NitroAttestationDocument`,
      typeArgs: [] as [],
      isPhantom: NitroAttestationDocument.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        NitroAttestationDocument.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        NitroAttestationDocument.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => NitroAttestationDocument.fromBcs(data),
      bcs: NitroAttestationDocument.bcs,
      fromJSONField: (field: any) =>
        NitroAttestationDocument.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        NitroAttestationDocument.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        NitroAttestationDocument.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        NitroAttestationDocument.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        NitroAttestationDocument.fetch(client, id),
      new: (fields: NitroAttestationDocumentFields) => {
        return new NitroAttestationDocument([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return NitroAttestationDocument.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<NitroAttestationDocument>> {
    return phantom(NitroAttestationDocument.reified());
  }
  static get p() {
    return NitroAttestationDocument.phantom();
  }

  static get bcs() {
    return bcs.struct("NitroAttestationDocument", {
      module_id: bcs.vector(bcs.u8()),
      timestamp: bcs.u64(),
      digest: bcs.vector(bcs.u8()),
      pcrs: bcs.vector(PCREntry1.bcs),
      public_key: Option.bcs(bcs.vector(bcs.u8())),
      user_data: Option.bcs(bcs.vector(bcs.u8())),
      nonce: Option.bcs(bcs.vector(bcs.u8())),
    });
  }

  static fromFields(fields: Record<string, any>): NitroAttestationDocument {
    return NitroAttestationDocument.reified().new({
      moduleId: decodeFromFields(reified.vector("u8"), fields.module_id),
      timestamp: decodeFromFields("u64", fields.timestamp),
      digest: decodeFromFields(reified.vector("u8"), fields.digest),
      pcrs: decodeFromFields(reified.vector(PCREntry1.reified()), fields.pcrs),
      publicKey: decodeFromFields(
        Option.reified(reified.vector("u8")),
        fields.public_key,
      ),
      userData: decodeFromFields(
        Option.reified(reified.vector("u8")),
        fields.user_data,
      ),
      nonce: decodeFromFields(
        Option.reified(reified.vector("u8")),
        fields.nonce,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): NitroAttestationDocument {
    if (!isNitroAttestationDocument(item.type)) {
      throw new Error("not a NitroAttestationDocument type");
    }

    return NitroAttestationDocument.reified().new({
      moduleId: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.module_id,
      ),
      timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp),
      digest: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.digest,
      ),
      pcrs: decodeFromFieldsWithTypes(
        reified.vector(PCREntry1.reified()),
        item.fields.pcrs,
      ),
      publicKey: decodeFromFieldsWithTypes(
        Option.reified(reified.vector("u8")),
        item.fields.public_key,
      ),
      userData: decodeFromFieldsWithTypes(
        Option.reified(reified.vector("u8")),
        item.fields.user_data,
      ),
      nonce: decodeFromFieldsWithTypes(
        Option.reified(reified.vector("u8")),
        item.fields.nonce,
      ),
    });
  }

  static fromBcs(data: Uint8Array): NitroAttestationDocument {
    return NitroAttestationDocument.fromFields(
      NitroAttestationDocument.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      moduleId: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.moduleId),
      timestamp: this.timestamp.toString(),
      digest: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.digest),
      pcrs: fieldToJSON<Vector<PCREntry1>>(
        `vector<${PCREntry1.$typeName}>`,
        this.pcrs,
      ),
      publicKey: fieldToJSON<Option<Vector<"u8">>>(
        `${Option.$typeName}<vector<u8>>`,
        this.publicKey,
      ),
      userData: fieldToJSON<Option<Vector<"u8">>>(
        `${Option.$typeName}<vector<u8>>`,
        this.userData,
      ),
      nonce: fieldToJSON<Option<Vector<"u8">>>(
        `${Option.$typeName}<vector<u8>>`,
        this.nonce,
      ),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): NitroAttestationDocument {
    return NitroAttestationDocument.reified().new({
      moduleId: decodeFromJSONField(reified.vector("u8"), field.moduleId),
      timestamp: decodeFromJSONField("u64", field.timestamp),
      digest: decodeFromJSONField(reified.vector("u8"), field.digest),
      pcrs: decodeFromJSONField(
        reified.vector(PCREntry1.reified()),
        field.pcrs,
      ),
      publicKey: decodeFromJSONField(
        Option.reified(reified.vector("u8")),
        field.publicKey,
      ),
      userData: decodeFromJSONField(
        Option.reified(reified.vector("u8")),
        field.userData,
      ),
      nonce: decodeFromJSONField(
        Option.reified(reified.vector("u8")),
        field.nonce,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): NitroAttestationDocument {
    if (json.$typeName !== NitroAttestationDocument.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return NitroAttestationDocument.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): NitroAttestationDocument {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isNitroAttestationDocument(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a NitroAttestationDocument object`,
      );
    }
    return NitroAttestationDocument.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): NitroAttestationDocument {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isNitroAttestationDocument(data.bcs.type)
      ) {
        throw new Error(`object at is not a NitroAttestationDocument object`);
      }

      return NitroAttestationDocument.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return NitroAttestationDocument.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<NitroAttestationDocument> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching NitroAttestationDocument object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isNitroAttestationDocument(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a NitroAttestationDocument object`,
      );
    }

    return NitroAttestationDocument.fromSuiObjectData(res.data);
  }
}
