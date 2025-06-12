import * as reified from "../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeArgument,
  ToTypeStr,
  TypeArgument,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  fieldToJSON,
  phantom,
  toBcs,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { Vector } from "../../../_framework/vector.js";
import { PKG_V31 } from "../../constants.js";
import { Entry as Entry1 } from "./Entry.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPriorityQueue(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::priority_queue::PriorityQueue` + "<");
}

export interface PriorityQueueFields<T extends TypeArgument> {
  entries: ToField<Vector<Entry1<T>>>;
}

export type PriorityQueueReified<T extends TypeArgument> = Reified<
  PriorityQueue<T>,
  PriorityQueueFields<T>
>;

/**
 * Move struct: `PriorityQueue`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::priority_queue`
 *
 * @typeParam T - Type parameter 0
 */
export class PriorityQueue<T extends TypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::priority_queue::PriorityQueue`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [false] as const;

  readonly $typeName = PriorityQueue.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::priority_queue::PriorityQueue<${ToTypeStr<T>}>`;
  readonly $typeArgs: [ToTypeStr<T>];
  readonly $isPhantom = PriorityQueue.$isPhantom;

  readonly entries: ToField<Vector<Entry1<T>>>;

  private constructor(typeArgs: [ToTypeStr<T>], fields: PriorityQueueFields<T>) {
    this.$fullTypeName = composeSuiType(
      PriorityQueue.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::priority_queue::PriorityQueue<${ToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.entries = fields.entries;
  }

  static reified<T extends Reified<TypeArgument, any>>(
    T: T,
  ): PriorityQueueReified<ToTypeArgument<T>> {
    return {
      typeName: PriorityQueue.$typeName,
      fullTypeName: composeSuiType(
        PriorityQueue.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::priority_queue::PriorityQueue<${ToTypeStr<ToTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [ToTypeStr<ToTypeArgument<T>>],
      isPhantom: PriorityQueue.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) => PriorityQueue.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => PriorityQueue.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => PriorityQueue.fromBcs(T, data),
      bcs: PriorityQueue.bcs(toBcs(T)),
      fromJSONField: (field: any) => PriorityQueue.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => PriorityQueue.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) => PriorityQueue.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) => PriorityQueue.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) => PriorityQueue.fetch(client, T, id),
      new: (fields: PriorityQueueFields<ToTypeArgument<T>>) => {
        return new PriorityQueue([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PriorityQueue.reified;
  }

  static phantom<T extends Reified<TypeArgument, any>>(
    T: T,
  ): PhantomReified<ToTypeStr<PriorityQueue<ToTypeArgument<T>>>> {
    return phantom(PriorityQueue.reified(T));
  }
  static get p() {
    return PriorityQueue.phantom;
  }

  static get bcs() {
    return <T extends BcsType<any>>(T: T) =>
      bcs.struct(`PriorityQueue<${T.name}>`, {
        entries: bcs.vector(Entry1.bcs(T)),
      });
  }

  static fromFields<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    fields: Record<string, any>,
  ): PriorityQueue<ToTypeArgument<T>> {
    return PriorityQueue.reified(typeArg).new({
      entries: decodeFromFields(reified.vector(Entry1.reified(typeArg)), fields.entries),
    });
  }

  static fromFieldsWithTypes<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): PriorityQueue<ToTypeArgument<T>> {
    if (!isPriorityQueue(item.type)) {
      throw new Error("not a PriorityQueue type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return PriorityQueue.reified(typeArg).new({
      entries: decodeFromFieldsWithTypes(
        reified.vector(Entry1.reified(typeArg)),
        item.fields.entries,
      ),
    });
  }

  static fromBcs<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    data: Uint8Array,
  ): PriorityQueue<ToTypeArgument<T>> {
    return PriorityQueue.fromFields(typeArg, PriorityQueue.bcs(toBcs(typeArg)).parse(data));
  }

  toJSONField() {
    return {
      entries: fieldToJSON<Vector<Entry1<T>>>(
        `vector<${Entry1.$typeName}<${this.$typeArgs?.[0]}>>`,
        this.entries,
      ),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    field: any,
  ): PriorityQueue<ToTypeArgument<T>> {
    return PriorityQueue.reified(typeArg).new({
      entries: decodeFromJSONField(reified.vector(Entry1.reified(typeArg)), field.entries),
    });
  }

  static fromJSON<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    json: Record<string, any>,
  ): PriorityQueue<ToTypeArgument<T>> {
    if (json.$typeName !== PriorityQueue.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(PriorityQueue.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return PriorityQueue.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    content: SuiParsedData,
  ): PriorityQueue<ToTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPriorityQueue(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a PriorityQueue object`);
    }
    return PriorityQueue.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    data: SuiObjectData,
  ): PriorityQueue<ToTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isPriorityQueue(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a PriorityQueue object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return PriorityQueue.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PriorityQueue.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends Reified<TypeArgument, any>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<PriorityQueue<ToTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching PriorityQueue object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isPriorityQueue(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a PriorityQueue object`);
    }

    return PriorityQueue.fromSuiObjectData(typeArg, res.data);
  }
}
