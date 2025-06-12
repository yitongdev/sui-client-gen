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
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../_framework/util.js";
import { Vector } from "../../../_framework/vector.js";
import { PKG_V31 } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isUpgradeTicket(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::package::UpgradeTicket`;
}

export interface UpgradeTicketFields {
  cap: ToField<ID>;
  package: ToField<ID>;
  policy: ToField<"u8">;
  digest: ToField<Vector<"u8">>;
}

export type UpgradeTicketReified = Reified<UpgradeTicket, UpgradeTicketFields>;

/**
 * Move struct: `UpgradeTicket`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 */
export class UpgradeTicket implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::package::UpgradeTicket`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = UpgradeTicket.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::package::UpgradeTicket`;
  readonly $typeArgs: [];
  readonly $isPhantom = UpgradeTicket.$isPhantom;

  readonly cap: ToField<ID>;
  readonly package: ToField<ID>;
  readonly policy: ToField<"u8">;
  readonly digest: ToField<Vector<"u8">>;

  private constructor(typeArgs: [], fields: UpgradeTicketFields) {
    this.$fullTypeName = composeSuiType(
      UpgradeTicket.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::package::UpgradeTicket`;
    this.$typeArgs = typeArgs;

    this.cap = fields.cap;
    this.package = fields.package;
    this.policy = fields.policy;
    this.digest = fields.digest;
  }

  static reified(): UpgradeTicketReified {
    return {
      typeName: UpgradeTicket.$typeName,
      fullTypeName: composeSuiType(
        UpgradeTicket.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::package::UpgradeTicket`,
      typeArgs: [] as [],
      isPhantom: UpgradeTicket.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => UpgradeTicket.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => UpgradeTicket.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => UpgradeTicket.fromBcs(data),
      bcs: UpgradeTicket.bcs,
      fromJSONField: (field: any) => UpgradeTicket.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => UpgradeTicket.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => UpgradeTicket.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => UpgradeTicket.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => UpgradeTicket.fetch(client, id),
      new: (fields: UpgradeTicketFields) => {
        return new UpgradeTicket([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return UpgradeTicket.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<UpgradeTicket>> {
    return phantom(UpgradeTicket.reified());
  }
  static get p() {
    return UpgradeTicket.phantom();
  }

  static get bcs() {
    return bcs.struct("UpgradeTicket", {
      cap: ID.bcs,
      package: ID.bcs,
      policy: bcs.u8(),
      digest: bcs.vector(bcs.u8()),
    });
  }

  static fromFields(fields: Record<string, any>): UpgradeTicket {
    return UpgradeTicket.reified().new({
      cap: decodeFromFields(ID.reified(), fields.cap),
      package: decodeFromFields(ID.reified(), fields.package),
      policy: decodeFromFields("u8", fields.policy),
      digest: decodeFromFields(reified.vector("u8"), fields.digest),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): UpgradeTicket {
    if (!isUpgradeTicket(item.type)) {
      throw new Error("not a UpgradeTicket type");
    }

    return UpgradeTicket.reified().new({
      cap: decodeFromFieldsWithTypes(ID.reified(), item.fields.cap),
      package: decodeFromFieldsWithTypes(ID.reified(), item.fields.package),
      policy: decodeFromFieldsWithTypes("u8", item.fields.policy),
      digest: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.digest),
    });
  }

  static fromBcs(data: Uint8Array): UpgradeTicket {
    return UpgradeTicket.fromFields(UpgradeTicket.bcs.parse(data));
  }

  toJSONField() {
    return {
      cap: this.cap,
      package: this.package,
      policy: this.policy,
      digest: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.digest),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): UpgradeTicket {
    return UpgradeTicket.reified().new({
      cap: decodeFromJSONField(ID.reified(), field.cap),
      package: decodeFromJSONField(ID.reified(), field.package),
      policy: decodeFromJSONField("u8", field.policy),
      digest: decodeFromJSONField(reified.vector("u8"), field.digest),
    });
  }

  static fromJSON(json: Record<string, any>): UpgradeTicket {
    if (json.$typeName !== UpgradeTicket.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return UpgradeTicket.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): UpgradeTicket {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isUpgradeTicket(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a UpgradeTicket object`);
    }
    return UpgradeTicket.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): UpgradeTicket {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isUpgradeTicket(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a UpgradeTicket object`);
      }

      return UpgradeTicket.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return UpgradeTicket.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<UpgradeTicket> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching UpgradeTicket object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isUpgradeTicket(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a UpgradeTicket object`);
    }

    return UpgradeTicket.fromSuiObjectData(res.data);
  }
}
