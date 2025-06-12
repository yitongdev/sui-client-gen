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
import { PKG_V35 } from "../../constants.js";
import { JWK as JWK1 } from "./JWK.js";
import { JwkId as JwkId1 } from "./JwkId.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isActiveJwk(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::authenticator_state::ActiveJwk`;
}

export interface ActiveJwkFields {
  jwkId: ToField<JwkId1>;
  jwk: ToField<JWK1>;
  epoch: ToField<"u64">;
}

export type ActiveJwkReified = Reified<ActiveJwk, ActiveJwkFields>;

/**
 * Move struct: `ActiveJwk`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 */
export class ActiveJwk implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::authenticator_state::ActiveJwk`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ActiveJwk.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::authenticator_state::ActiveJwk`;
  readonly $typeArgs: [];
  readonly $isPhantom = ActiveJwk.$isPhantom;

  readonly jwkId: ToField<JwkId1>;
  readonly jwk: ToField<JWK1>;
  readonly epoch: ToField<"u64">;

  private constructor(typeArgs: [], fields: ActiveJwkFields) {
    this.$fullTypeName = composeSuiType(
      ActiveJwk.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::authenticator_state::ActiveJwk`;
    this.$typeArgs = typeArgs;

    this.jwkId = fields.jwkId;
    this.jwk = fields.jwk;
    this.epoch = fields.epoch;
  }

  static reified(): ActiveJwkReified {
    return {
      typeName: ActiveJwk.$typeName,
      fullTypeName: composeSuiType(
        ActiveJwk.$typeName,
        ...[],
      ) as `${typeof PKG_V35}::authenticator_state::ActiveJwk`,
      typeArgs: [] as [],
      isPhantom: ActiveJwk.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => ActiveJwk.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => ActiveJwk.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ActiveJwk.fromBcs(data),
      bcs: ActiveJwk.bcs,
      fromJSONField: (field: any) => ActiveJwk.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ActiveJwk.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => ActiveJwk.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => ActiveJwk.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => ActiveJwk.fetch(client, id),
      new: (fields: ActiveJwkFields) => {
        return new ActiveJwk([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ActiveJwk.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ActiveJwk>> {
    return phantom(ActiveJwk.reified());
  }
  static get p() {
    return ActiveJwk.phantom();
  }

  static get bcs() {
    return bcs.struct("ActiveJwk", {
      jwk_id: JwkId1.bcs,
      jwk: JWK1.bcs,
      epoch: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): ActiveJwk {
    return ActiveJwk.reified().new({
      jwkId: decodeFromFields(JwkId1.reified(), fields.jwk_id),
      jwk: decodeFromFields(JWK1.reified(), fields.jwk),
      epoch: decodeFromFields("u64", fields.epoch),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ActiveJwk {
    if (!isActiveJwk(item.type)) {
      throw new Error("not a ActiveJwk type");
    }

    return ActiveJwk.reified().new({
      jwkId: decodeFromFieldsWithTypes(JwkId1.reified(), item.fields.jwk_id),
      jwk: decodeFromFieldsWithTypes(JWK1.reified(), item.fields.jwk),
      epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch),
    });
  }

  static fromBcs(data: Uint8Array): ActiveJwk {
    return ActiveJwk.fromFields(ActiveJwk.bcs.parse(data));
  }

  toJSONField() {
    return {
      jwkId: this.jwkId.toJSONField(),
      jwk: this.jwk.toJSONField(),
      epoch: this.epoch.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): ActiveJwk {
    return ActiveJwk.reified().new({
      jwkId: decodeFromJSONField(JwkId1.reified(), field.jwkId),
      jwk: decodeFromJSONField(JWK1.reified(), field.jwk),
      epoch: decodeFromJSONField("u64", field.epoch),
    });
  }

  static fromJSON(json: Record<string, any>): ActiveJwk {
    if (json.$typeName !== ActiveJwk.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ActiveJwk.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ActiveJwk {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isActiveJwk(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a ActiveJwk object`);
    }
    return ActiveJwk.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ActiveJwk {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isActiveJwk(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a ActiveJwk object`);
      }

      return ActiveJwk.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ActiveJwk.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ActiveJwk> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching ActiveJwk object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isActiveJwk(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ActiveJwk object`);
    }

    return ActiveJwk.fromSuiObjectData(res.data);
  }
}
