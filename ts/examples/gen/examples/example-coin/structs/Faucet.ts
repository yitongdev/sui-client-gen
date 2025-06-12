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
  phantom,
  ToTypeStr as ToPhantom,
} from "../../../_framework/reified.js";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../_framework/util.js";
import { TreasuryCap } from "../../../sui/coin/structs/index.js";
import { UID } from "../../../sui/object/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { EXAMPLE_COIN as EXAMPLE_COIN1 } from "./EXAMPLE_COIN.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isFaucet(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::example_coin::Faucet`;
}

export interface FaucetFields {
  id: ToField<UID>;
  cap: ToField<TreasuryCap<ToPhantom<EXAMPLE_COIN1>>>;
}

export type FaucetReified = Reified<Faucet, FaucetFields>;

/**
 * Move struct: `Faucet`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::example_coin`
 */
export class Faucet implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::example_coin::Faucet`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Faucet.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::example_coin::Faucet`;
  readonly $typeArgs: [];
  readonly $isPhantom = Faucet.$isPhantom;

  readonly id: ToField<UID>;
  readonly cap: ToField<TreasuryCap<ToPhantom<EXAMPLE_COIN1>>>;

  private constructor(typeArgs: [], fields: FaucetFields) {
    this.$fullTypeName = composeSuiType(
      Faucet.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::example_coin::Faucet`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.cap = fields.cap;
  }

  static reified(): FaucetReified {
    return {
      typeName: Faucet.$typeName,
      fullTypeName: composeSuiType(
        Faucet.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::example_coin::Faucet`,
      typeArgs: [] as [],
      isPhantom: Faucet.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Faucet.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Faucet.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Faucet.fromBcs(data),
      bcs: Faucet.bcs,
      fromJSONField: (field: any) => Faucet.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Faucet.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => Faucet.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => Faucet.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Faucet.fetch(client, id),
      new: (fields: FaucetFields) => {
        return new Faucet([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Faucet.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Faucet>> {
    return phantom(Faucet.reified());
  }
  static get p() {
    return Faucet.phantom();
  }

  static get bcs() {
    return bcs.struct("Faucet", {
      id: UID.bcs,
      cap: TreasuryCap.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): Faucet {
    return Faucet.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      cap: decodeFromFields(
        TreasuryCap.reified(reified.phantom(EXAMPLE_COIN1.reified())),
        fields.cap,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Faucet {
    if (!isFaucet(item.type)) {
      throw new Error("not a Faucet type");
    }

    return Faucet.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      cap: decodeFromFieldsWithTypes(
        TreasuryCap.reified(reified.phantom(EXAMPLE_COIN1.reified())),
        item.fields.cap,
      ),
    });
  }

  static fromBcs(data: Uint8Array): Faucet {
    return Faucet.fromFields(Faucet.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      cap: this.cap.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): Faucet {
    return Faucet.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      cap: decodeFromJSONField(
        TreasuryCap.reified(reified.phantom(EXAMPLE_COIN1.reified())),
        field.cap,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): Faucet {
    if (json.$typeName !== Faucet.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Faucet.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Faucet {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isFaucet(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Faucet object`);
    }
    return Faucet.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Faucet {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isFaucet(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Faucet object`);
      }

      return Faucet.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Faucet.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Faucet> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Faucet object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isFaucet(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Faucet object`);
    }

    return Faucet.fromSuiObjectData(res.data);
  }
}
